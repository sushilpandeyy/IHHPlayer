import os
from pytube import YouTube
from moviepy.editor import VideoFileClip
import boto3
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

load_dotenv()

class Uploadda(BaseModel):
    name: str

def getupload(url):
    access_key_id = os.getenv("KEY_ID")
    secret_access_key = os.getenv("ACCESS")

    try:
        yt = YouTube(url)
        stream = yt.streams.get_lowest_resolution()   
        stream.download(filename=yt.title + '.mp4')

        video = VideoFileClip(yt.title + '.mp4')
        audio = video.audio
        audio.write_audiofile(yt.title + '.mp3')

        s3 = boto3.resource(
            service_name='s3',
            region_name='ap-south-1',
            aws_access_key_id=access_key_id,
            aws_secret_access_key=secret_access_key
        )

        s3.Bucket('ihhplayer').upload_file(Filename=yt.title + '.mp3', Key=yt.title + '.mp3')
        uploaded_url = f"https://ihhplayer.s3.ap-south-1.amazonaws.com/{yt.title}.mp3"
        print(f"File uploaded to {uploaded_url}")

        os.remove(yt.title + '.mp4')
        os.remove(yt.title + '.mp3')
        return uploaded_url

    except Exception as e:
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing YouTube URL: {e}")  


@app.post('/addmusic')
def root(data: Uploadda):
    try:
        s3url = getupload(data.name)
        return {"s3url": s3url}
    except HTTPException as e:
        return e  
