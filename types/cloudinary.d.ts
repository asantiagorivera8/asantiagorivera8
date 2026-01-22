// Cloudinary Video Player type definitions
declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (element: HTMLElement, options: CloudinaryPlayerOptions) => CloudinaryPlayer
    }
  }
  interface Navigator {
    connection?: {
      effectiveType?: string
      type?: string
      downlink?: number
      rtt?: number
    }
  }
}

interface CloudinaryPlayerOptions {
  cloud_name: string
  public_id: string
  fluid?: boolean
  controls?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  preload?: string
  playsinline?: boolean
  transformation?: {
    quality?: string
    fetch_format?: string
    video_codec?: string
    streaming_profile?: string
  }
  breakpoints?: {
    mobile?: number
    tablet?: number
  }
  posterOptions?: {
    transformation?: {
      quality?: string
      fetch_format?: string
    }
  }
}

interface CloudinaryPlayer {
  play(): Promise<void>
  pause(): void
  dispose(): void
  on(event: string, callback: (data?: any) => void): void
  off(event: string, callback?: (data?: any) => void): void
}

export {}
