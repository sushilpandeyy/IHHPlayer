import os
from pytube import YouTube
from moviepy.editor import VideoFileClip
import boto3
from dotenv import load_dotenv
from fastapi import FastAPI

app=FastAPI()


# Load environment variables from .env file
load_dotenv()
def getupload(url):
    access_key_id = os.getenv("KEY_ID")
    secret_access_key = os.getenv("ACCESS")
    print(access_key_id)
    # Enter the YouTube video URL
    try:
        # Download the video
        yt = YouTube(url)
        stream = yt.streams.get_lowest_resolution() 
        stream.download(filename=yt.title + '.mp4')
    
        # Extract the audio
        video = VideoFileClip(yt.title + '.mp4')
        audio = video.audio
        audio.write_audiofile(yt.title + '.mp3')
    
        # Initialize S3 resource
        s3 = boto3.resource(
            service_name='s3',
            region_name='ap-south-1',
            aws_access_key_id=access_key_id,
            aws_secret_access_key=secret_access_key
        )
    
        # Upload the file to S3
        s3.Bucket('ihhplayer').upload_file(Filename=yt.title + '.mp3', Key=yt.title + '.mp3')
        uploaded_url = f"https://ihhplayer.s3.ap-south-1.amazonaws.com/{yt.title}.mp3"
        print(f"File uploaded to {uploaded_url}")
        
    
        # Clean up local files
        os.remove(yt.title + '.mp4')
        os.remove(yt.title + '.mp3')
        return uploaded_url
    
    except Exception as e:
        print(f"An error occurred: {e}")
    
getupload("https://www.youtube.com/watch?v=KWleWuI-Zx8")

@app.get('/')
async def root():
    return {"message": "Hello World"}