## Video

### Install ffmpeg

```
$ brew tap homebrew-ffmpeg/ffmpeg
$ brew options homebrew-ffmpeg/ffmpeg/ffmpeg
$ brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-fdk-aac --with-rav1e

```

[Complete list](https://gist.github.com/Piasy/b5dfd5c048eb69d1b91719988c0325d8)

### Reencode source video to:

#### h264

```
ffmpeg -i <source> -map_metadata -1 -c:a libfdk_aac -c:v libx264 -crf 24 -preset veryslow -profile:v main -pix_fmt yuv420p -movflags +faststart -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" <source>.h264.mp4
```

#### av1

```
ffmpeg -i <source> -map_metadata -1 -c:a libopus -c:v librav1e -qp 80 -tile-columns 2 -tile-rows 2 -pix_fmt yuv420p -movflags +faststart -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" <source>.av1.mp4
```

#### hevc

```
ffmpeg -i <source> -map_metadata -1 -c:a libfdk_aac -c:v libx265 -crf 24 -preset veryslow -pix_fmt yuv420p -movflags +faststart -tag:v hvc1 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" <source>.hevc.mp4
```

### Use in component / html

```
<video controls width="600" height="400">
  <source
    src="video.av1.mp4"
    type="video/mp4; codecs=av01.0.05M.08,opus"
  >
  <source
    src="video.hevc.mp4"
    type="video/mp4; codecs=hvc1"
  >
  <source
    src="video.h264.mp4"
    type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
  >
</video>
```
