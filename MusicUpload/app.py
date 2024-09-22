import os
import yt_dlp
import boto3
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import re

app = FastAPI()

load_dotenv()

class Uploadda(BaseModel):
    name: str

class VideoDetails:
    def __init__(self, url, title):
        self.url = url
        self.title = title

def extract_youtube_video_id(url):
    # Regular expression to match YouTube video ID
    regex = r'(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.*[?&]v=)|youtu\.be\/)([^&\n?#]+)'
    match = re.search(regex, url)
    return match.group(1) if match else None

def getupload(url):
    access_key_id = os.getenv("KEY_ID")
    secret_access_key = os.getenv("ACCESS")
    bucket_name = 'ihhplayer'

    audio_filename = None
    keyid=extract_youtube_video_id(url)
    try:
        # Set options for yt-dlp to download audio in mp3 format
        ydl_opts = {
            'format': 'bestaudio/best',  # Select the best available audio quality
            'outtmpl': keyid+'.%(ext)s',      # Output filename format (1.mp3)
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
        }

        # Download the audio
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(url, download=True)
            video_title = info_dict.get('title', None)
            audio_filename = keyid+'.mp3'  # Consistent filename for MP3
            print(f"Expected audio filename: {audio_filename}")

        # Upload the .mp3 file to S3
        s3 = boto3.client(
            service_name='s3',
            region_name='ap-south-1',
            aws_access_key_id=access_key_id,
            aws_secret_access_key=secret_access_key
        )

        s3.upload_file(Filename=audio_filename, Bucket=bucket_name, Key=audio_filename)
        uploaded_url = f"https://{bucket_name}.s3.ap-south-1.amazonaws.com/{audio_filename}"

        # Clean up the files
        os.remove(audio_filename)

        return VideoDetails(uploaded_url, video_title)

    except Exception as e:
        if audio_filename and os.path.exists(audio_filename):
            os.remove(audio_filename)

        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing YouTube URL: {e}")

@app.post('/addmusic')
def root(data: Uploadda):
    try:
        print("yes")
        s3url = getupload(data.name)
        return {"s3url": s3url.url, "title": s3url.title}
    except HTTPException as e:
        return {"error": e.detail}

@app.get('/')
def root():
    return {"message": "Working"}

