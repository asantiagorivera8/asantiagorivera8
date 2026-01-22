"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageWithLazyLoadingProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export default function ImageWithLazyLoading({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
}: ImageWithLazyLoadingProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Reset loaded state when src changes
    setIsLoaded(false)
  }, [src])

  return (
    <div
      className={`relative ${className || ""} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        className={`${className || ""} ${fill ? "object-cover" : ""}`}
        priority={priority}
      />
    </div>
  )
}
