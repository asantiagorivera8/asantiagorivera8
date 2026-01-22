"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import ConsultaGratuitaButton from "./ConsultaGratuitaButton"

const slides = [
  {
    id: 1,
    badge: "Transformación Digital",
    title: "Revoluciona tu empresa con",
    highlight: "tecnología avanzada",
    subtitle:
      "Consultoría integral, recursos humanos, ciberseguridad, IA y marketing digital para impulsar tu crecimiento empresarial hacia el futuro.",
    mobileSubtitle: "Consultoría, RRHH, ciberseguridad, IA y marketing digital para tu empresa.",
    primaryCTA: "Consulta Gratuita",
    secondaryCTA: "Ver Servicios",
    secondaryLink: "/#servicios",
  },
  {
    id: 2,
    badge: "Talento Especializado",
    title: "Conectamos tu empresa con",
    highlight: "el mejor talento",
    subtitle:
      "Staffing y reclutamiento especializado en tecnología, ciberseguridad y marketing digital para equipos de alto rendimiento.",
    mobileSubtitle: "Staffing especializado en tecnología y marketing digital.",
    primaryCTA: "Encontrar Talento",
    secondaryCTA: "Ver Staffing",
    secondaryLink: "/staffing",
  },
  {
    id: 3,
    badge: "Formación Empresarial",
    title: "Capacita tu equipo con",
    highlight: "conocimiento experto",
    subtitle:
      "Academia online, libros especializados y consultoría en recursos humanos para el desarrollo integral de tu organización.",
    mobileSubtitle: "Academia online y consultoría en recursos humanos.",
    primaryCTA: "Explorar Academia",
    secondaryCTA: "Ver Formación",
    secondaryLink: "/academia",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideProgress, setSlideProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isAndroid: false,
    isIOS: false,
    browser: "",
    connection: "unknown",
    screenSize: "unknown",
    prefersReducedMotion: false,
  })
  const [userInteracted, setUserInteracted] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [debugInfo, setDebugInfo] = useState({
    videoSrc: "",
    canPlay: false,
    networkState: 0,
    readyState: 0,
    currentTime: 0,
    duration: 0,
    autoplayStatus: "unknown",
    transitionCount: 0,
    lastTransitionTime: 0,
    slideHistory: [] as number[],
    loopCount: 0,
    totalCycles: 0,
  })

  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const visibilityTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const slideStartTimeRef = useRef<number>(Date.now())

  // OPTIMIZED TIMING FOR MAXIMUM ENGAGEMENT AND PERFECT LOOPING
  const SLIDE_DURATION = 3200 // 3.2s - Optimal for content absorption and engagement
  const TRANSITION_OUT_DURATION = 180 // 180ms - Fast but smooth exit
  const TRANSITION_IN_DURATION = 320 // 320ms - Smooth entrance animation
  const PAUSE_AFTER_INTERACTION = 4500 // 4.5s - Quick resume after user interaction
  const PROGRESS_UPDATE_INTERVAL = 25 // 25ms - Ultra-smooth progress (40fps)
  const VISIBILITY_CHECK_INTERVAL = 1000 // Check visibility every second

  // Enhanced device detection with motion preferences
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent
      const isMobile =
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      const isAndroid = /Android/i.test(userAgent)
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent)

      let browser = "Unknown"
      if (userAgent.includes("Chrome") && !userAgent.includes("Samsung")) browser = "Chrome"
      else if (userAgent.includes("Samsung")) browser = "Samsung Browser"
      else if (userAgent.includes("Firefox")) browser = "Firefox"
      else if (userAgent.includes("Opera")) browser = "Opera"
      else if (userAgent.includes("Edge")) browser = "Edge"
      else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browser = "Safari"

      let connection = "4g"
      if ("connection" in navigator) {
        const conn = (navigator as any).connection
        connection = conn?.effectiveType || conn?.type || "4g"
      }

      let screenSize = "large"
      if (window.innerWidth < 480) screenSize = "small"
      else if (window.innerWidth < 768) screenSize = "medium"
      else if (window.innerWidth < 1024) screenSize = "large"
      else screenSize = "xlarge"

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      setDeviceInfo({ isMobile, isAndroid, isIOS, browser, connection, screenSize, prefersReducedMotion })
    }

    detectDevice()
    window.addEventListener("resize", detectDevice)

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    motionQuery.addEventListener("change", detectDevice)

    return () => {
      window.removeEventListener("resize", detectDevice)
      motionQuery.removeEventListener("change", detectDevice)
    }
  }, [])

  // Page visibility detection for pausing/resuming autoplay
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isCurrentlyVisible = !document.hidden
      setIsVisible(isCurrentlyVisible)

      if (isCurrentlyVisible) {
        console.log("🔍 Page became visible - resuming autoplay")
        setIsAutoPlaying(true)
      } else {
        console.log("🔍 Page became hidden - pausing autoplay")
        setIsAutoPlaying(false)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Initial visibility check
    setIsVisible(!document.hidden)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Intersection Observer for hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting
          console.log(`🔍 Hero section visibility: ${isIntersecting ? "visible" : "hidden"}`)

          if (isIntersecting && isVisible) {
            setIsAutoPlaying(true)
          } else {
            setIsAutoPlaying(false)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of hero is visible
        rootMargin: "0px 0px -10% 0px", // Small margin to ensure proper detection
      },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [isVisible])

  // BULLETPROOF SLIDE TRANSITION HANDLER WITH COMPREHENSIVE LOGGING
  const handleSlideTransition = useCallback(
    (targetSlide: number) => {
      if (isTransitioning) {
        console.warn("⚠️ Transition blocked - already in progress")
        return false
      }

      // Ensure valid slide index with bulletproof bounds checking
      const validTargetSlide = ((targetSlide % slides.length) + slides.length) % slides.length

      if (validTargetSlide === currentSlide) {
        console.log("ℹ️ Target slide same as current, skipping transition")
        return false
      }

      console.log(`🔄 TRANSITION START: ${currentSlide + 1} → ${validTargetSlide + 1}`)

      // Update debug info with transition tracking
      setDebugInfo((prev) => {
        const newHistory = [...prev.slideHistory, validTargetSlide].slice(-10) // Keep last 10 transitions
        const isCompletingLoop = currentSlide === 2 && validTargetSlide === 0
        const newLoopCount = isCompletingLoop ? prev.loopCount + 1 : prev.loopCount

        return {
          ...prev,
          transitionCount: prev.transitionCount + 1,
          lastTransitionTime: Date.now(),
          slideHistory: newHistory,
          loopCount: newLoopCount,
          totalCycles: isCompletingLoop ? prev.totalCycles + 1 : prev.totalCycles,
        }
      })

      setIsTransitioning(true)
      setSlideProgress(0)

      // Clear all intervals during transition
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }

      // Exit animation phase
      transitionTimeoutRef.current = setTimeout(
        () => {
          setCurrentSlide(validTargetSlide)
          slideStartTimeRef.current = Date.now()
          console.log(`✅ SLIDE CHANGED: Now showing slide ${validTargetSlide + 1}`)

          // Enter animation phase
          transitionTimeoutRef.current = setTimeout(
            () => {
              setIsTransitioning(false)
              console.log(`✅ TRANSITION COMPLETE: Slide ${validTargetSlide + 1} fully active`)
            },
            deviceInfo.prefersReducedMotion ? 80 : TRANSITION_IN_DURATION,
          )
        },
        deviceInfo.prefersReducedMotion ? 40 : TRANSITION_OUT_DURATION,
      )

      return true
    },
    [currentSlide, isTransitioning, deviceInfo.prefersReducedMotion],
  )

  // ENHANCED PROGRESS TRACKING WITH PRECISE TIMING
  useEffect(() => {
    // Clear any existing interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }

    if (!isAutoPlaying || isTransitioning || !isVisible) {
      setSlideProgress(0)
      return
    }

    console.log(`⏱️ Starting progress tracking for slide ${currentSlide + 1}`)
    slideStartTimeRef.current = Date.now()
    setSlideProgress(0)

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - slideStartTimeRef.current
      const progress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setSlideProgress(progress)

      if (progress >= 100) {
        clearInterval(progressIntervalRef.current!)
        progressIntervalRef.current = null
        console.log(`✅ Progress complete for slide ${currentSlide + 1}`)
      }
    }, PROGRESS_UPDATE_INTERVAL)

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
    }
  }, [currentSlide, isAutoPlaying, isTransitioning, isVisible])

  // BULLETPROOF AUTOPLAY MECHANISM WITH PERFECT LOOPING
  useEffect(() => {
    // Clear any existing interval
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
      autoplayIntervalRef.current = null
    }

    if (!isAutoPlaying || !isVisible || isTransitioning) {
      console.log(
        `⏸️ Autoplay paused - isAutoPlaying: ${isAutoPlaying}, isVisible: ${isVisible}, isTransitioning: ${isTransitioning}`,
      )
      return
    }

    console.log(`▶️ Starting autoplay timer for slide ${currentSlide + 1}, duration: ${SLIDE_DURATION}ms`)

    autoplayIntervalRef.current = setInterval(() => {
      const nextSlideIndex = (currentSlide + 1) % slides.length
      console.log(
        `🚀 AUTO-ADVANCE: ${currentSlide + 1} → ${nextSlideIndex + 1} (${nextSlideIndex === 0 ? "LOOP RESTART" : "NEXT SLIDE"})`,
      )

      const transitionSuccess = handleSlideTransition(nextSlideIndex)
      if (!transitionSuccess) {
        console.error("❌ Auto-transition failed, clearing interval")
        if (autoplayIntervalRef.current) {
          clearInterval(autoplayIntervalRef.current)
          autoplayIntervalRef.current = null
        }
      }
    }, SLIDE_DURATION)

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }
    }
  }, [currentSlide, isAutoPlaying, isVisible, isTransitioning, handleSlideTransition])

  // User interaction detection for mobile
  useEffect(() => {
    if (deviceInfo.isMobile && !userInteracted) {
      const handleInteraction = () => {
        console.log("🎯 User interaction detected on mobile")
        setUserInteracted(true)
        setHasUserInteracted(true)

        if (videoRef.current && videoReady) {
          const video = videoRef.current
          const playPromise = video.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("✅ Video playing after user interaction")
                setVideoPlaying(true)
                setDebugInfo((prev) => ({ ...prev, autoplayStatus: "success-after-interaction" }))
              })
              .catch((error) => {
                console.warn("⚠️ Video play failed after interaction:", error)
                setDebugInfo((prev) => ({ ...prev, autoplayStatus: "failed-after-interaction" }))
              })
          }
        }
      }

      const events = ["touchstart", "click", "scroll", "touchmove"]
      events.forEach((event) => {
        document.addEventListener(event, handleInteraction, { once: true, passive: true })
      })

      return () => {
        events.forEach((event) => {
          document.removeEventListener(event, handleInteraction)
        })
      }
    }
  }, [deviceInfo.isMobile, userInteracted, videoReady])

  // Enhanced video setup and handling
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log("🎬 Setting up video with device info:", deviceInfo)

    const getOptimizedVideoUrl = () => {
      // Use direct Cloudinary URL without complex transformations that may fail
      const videoUrl = "https://res.cloudinary.com/deya01kis/video/upload/v1750223258/hyokuxlgklab2ieuuyma.mp4"
      console.log("🔗 Using video URL:", videoUrl)
      return videoUrl
    }

    const handleLoadStart = () => {
      console.log("🔄 Video load started")
      setVideoError(false)
    }

    const handleLoadedMetadata = () => {
      console.log("📊 Video metadata loaded")
      updateDebugInfo()
    }

    const handleLoadedData = () => {
      console.log("✅ Video data loaded")
      setVideoLoaded(true)
      setVideoError(false)
      updateDebugInfo()
    }

    const handleCanPlay = () => {
      console.log("▶️ Video can play")
      setVideoReady(true)
      updateDebugInfo()

      if (!deviceInfo.isMobile) {
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("✅ Desktop autoplay successful")
              setVideoPlaying(true)
              setDebugInfo((prev) => ({ ...prev, autoplayStatus: "success-desktop" }))
            })
            .catch((error) => {
              console.warn("⚠️ Desktop autoplay failed:", error)
              setDebugInfo((prev) => ({ ...prev, autoplayStatus: "failed-desktop" }))
            })
        }
      }
    }

    const handleCanPlayThrough = () => {
      console.log("🚀 Video can play through")
      updateDebugInfo()
    }

    const handleError = () => {
      // Silently fall back to static background - don't break the UI
      setVideoError(true)
      setVideoLoaded(false)
      setVideoReady(false)
    }

    const handlePlay = () => {
      console.log("▶️ Video started playing")
      setVideoPlaying(true)
      updateDebugInfo()
    }

    const handlePause = () => {
      console.log("⏸️ Video paused")
      setVideoPlaying(false)
    }

    const handleTimeUpdate = () => {
      updateDebugInfo()
      if (deviceInfo.isMobile && video.currentTime >= video.duration - 0.5) {
        video.currentTime = 0
      }
    }

    const handleWaiting = () => {
      console.log("⏳ Video waiting for data")
    }

    const handleStalled = () => {
      console.warn("⚠️ Video stalled")
    }

    const updateDebugInfo = () => {
      if (video) {
        setDebugInfo((prev) => ({
          ...prev,
          videoSrc: video.src,
          canPlay: video.readyState >= 3,
          networkState: video.networkState,
          readyState: video.readyState,
          currentTime: video.currentTime,
          duration: video.duration || 0,
        }))
      }
    }

    video.addEventListener("loadstart", handleLoadStart)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("canplaythrough", handleCanPlayThrough)
    video.addEventListener("error", handleError)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("waiting", handleWaiting)
    video.addEventListener("stalled", handleStalled)

    video.setAttribute("playsinline", "true")
    video.setAttribute("webkit-playsinline", "true")
    video.setAttribute("muted", "true")
    video.setAttribute("loop", "true")

    if (deviceInfo.isMobile) {
      video.setAttribute("preload", "metadata")
    } else {
      video.setAttribute("preload", "auto")
      video.setAttribute("autoplay", "true")
    }

    const videoUrl = getOptimizedVideoUrl()
    video.src = videoUrl
    video.load()

    setTimeout(updateDebugInfo, 100)

    return () => {
      video.removeEventListener("loadstart", handleLoadStart)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("canplaythrough", handleCanPlayThrough)
      video.removeEventListener("error", handleError)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("waiting", handleWaiting)
      video.removeEventListener("stalled", handleStalled)
    }
  }, [deviceInfo])

  // Cleanup function for all intervals and timeouts
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
        transitionTimeoutRef.current = null
      }
      if (visibilityTimeoutRef.current) {
        clearTimeout(visibilityTimeoutRef.current)
        visibilityTimeoutRef.current = null
      }
    }
  }, [])

  // ENHANCED MANUAL NAVIGATION WITH PERFECT LOOPING
  const goToSlide = useCallback(
    (index: number) => {
      const validIndex = ((index % slides.length) + slides.length) % slides.length
      if (validIndex === currentSlide || isTransitioning) {
        console.log(`ℹ️ Manual navigation blocked - same slide or transitioning`)
        return
      }

      console.log(`👆 Manual navigation to slide ${validIndex + 1}`)
      setHasUserInteracted(true)

      const success = handleSlideTransition(validIndex)
      if (success) {
        // Pause autoplay temporarily after manual interaction
        setIsAutoPlaying(false)
        setTimeout(() => {
          console.log("🔄 Resuming autoplay after manual interaction")
          setIsAutoPlaying(true)
        }, PAUSE_AFTER_INTERACTION)
      }
    },
    [currentSlide, isTransitioning, handleSlideTransition],
  )

  const nextSlide = useCallback(() => {
    if (isTransitioning) {
      console.log("⚠️ Next slide blocked - transition in progress")
      return
    }

    const nextIndex = (currentSlide + 1) % slides.length
    console.log(`👆 Manual next slide to ${nextIndex + 1} ${nextIndex === 0 ? "(LOOP RESTART)" : ""}`)
    setHasUserInteracted(true)

    const success = handleSlideTransition(nextIndex)
    if (success) {
      setIsAutoPlaying(false)
      setTimeout(() => {
        console.log("🔄 Resuming autoplay after manual next")
        setIsAutoPlaying(true)
      }, PAUSE_AFTER_INTERACTION)
    }
  }, [currentSlide, isTransitioning, handleSlideTransition])

  const prevSlide = useCallback(() => {
    if (isTransitioning) {
      console.log("⚠️ Previous slide blocked - transition in progress")
      return
    }

    const prevIndex = (currentSlide - 1 + slides.length) % slides.length
    console.log(`👆 Manual previous slide to ${prevIndex + 1} ${prevIndex === 2 ? "(LOOP TO END)" : ""}`)
    setHasUserInteracted(true)

    const success = handleSlideTransition(prevIndex)
    if (success) {
      setIsAutoPlaying(false)
      setTimeout(() => {
        console.log("🔄 Resuming autoplay after manual previous")
        setIsAutoPlaying(true)
      }, PAUSE_AFTER_INTERACTION)
    }
  }, [currentSlide, isTransitioning, handleSlideTransition])

  const currentSlideData = slides[currentSlide]

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Container with proper layering */}
      <div className="absolute inset-0">
        {/* Static Background - Layer 1 (bottom) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(67, 56, 202, 0.95) 100%),
              url('/abstract-tech-background.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Video Background - Layer 2 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 2,
          }}
          autoPlay
          muted
          loop
          playsInline
          poster="/abstract-tech-background.png"
        >
          <source src="https://res.cloudinary.com/deya01kis/video/upload/v1750223258/techbizhersec.mp4" type="video/mp4" />
        </video>

        {/* Overlay - Layer 3 (top) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/50 to-gray-900/85 sm:bg-gradient-to-r sm:from-gray-900/90 sm:via-gray-900/60 sm:to-gray-900/90"
          style={{ zIndex: 3 }}
        />
      </div>

      {/* Navigation Arrows - Desktop only */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-all duration-300 hidden md:flex disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-all duration-300 hidden md:flex disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-4 py-8 text-center text-white sm:px-6 lg:px-8 hero-content-mobile md:transform-none md:pt-8">
          {/* Slide Content with Enhanced Transitions */}
          <div
            key={currentSlide}
            className={`hero-slide-content ${deviceInfo.prefersReducedMotion ? "reduced-motion" : ""}`}
          >
            {/* Badge */}
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-400/40 text-blue-200 text-xs font-semibold mb-4 sm:px-4 sm:py-2 sm:text-sm sm:mb-6">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse sm:w-2 sm:h-2" />
              {currentSlideData.badge}
            </div>

            {/* Main Title */}
            <h1 className="hero-title text-3xl font-bold text-white mb-4 leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:mb-6">
              <span className="hero-title-line block mb-1 sm:mb-2">{currentSlideData.title}</span>
              <span className="hero-highlight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 md:animate-gradient-x animate-gradient-x-mobile">
                {currentSlideData.highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle mb-8 sm:mb-12">
              <p className="text-base text-gray-200 leading-relaxed max-w-2xl mx-auto sm:hidden">
                {currentSlideData.mobileSubtitle}
              </p>
              <p className="hidden sm:block text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto md:text-xl lg:text-2xl">
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col gap-4 mb-8 sm:flex-row sm:gap-6 sm:justify-center sm:mb-12">
              <ConsultaGratuitaButton className="group relative overflow-hidden w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-base shadow-xl touch-manipulation sm:w-auto sm:py-4 sm:px-8 sm:text-lg">
                <span className="relative z-10 flex items-center justify-center">
                  {currentSlideData.primaryCTA}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </ConsultaGratuitaButton>

              <Link
                href={currentSlideData.secondaryLink}
                className="group relative overflow-hidden w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 active:scale-95 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/30 text-base shadow-xl touch-manipulation sm:w-auto sm:py-4 sm:px-8 sm:text-lg"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {currentSlideData.secondaryCTA}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center space-x-4">
            {/* Mobile Navigation */}
            <div className="flex space-x-3 sm:hidden">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-4 h-4 rounded-full transition-all duration-500 touch-manipulation disabled:cursor-not-allowed ${
                    index === currentSlide
                      ? "bg-blue-400 scale-125 shadow-lg shadow-blue-400/50"
                      : "bg-white/50 hover:bg-white/70 active:bg-white/80"
                  }`}
                  style={{ minWidth: "32px", minHeight: "32px" }}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-500 disabled:cursor-not-allowed ${
                      index === currentSlide
                        ? "bg-blue-400 scale-125 shadow-lg shadow-blue-400/50"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Siguiente slide"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar with Real-time Progress and Slide Markers */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        {/* Current slide progress */}
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-100 ease-linear"
          style={{
            width: `${(currentSlide / slides.length) * 100 + slideProgress / slides.length}%`,
          }}
        />

        {/* Slide markers */}
        <div className="absolute inset-0 flex">
          {slides.map((_, index) => (
            <div
              key={index}
              className="flex-1 border-r border-white/30 last:border-r-0"
              style={{ width: `${100 / slides.length}%` }}
            />
          ))}
        </div>
      </div>

      {/* COMPREHENSIVE DEBUG PANEL WITH LOOPING VERIFICATION */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 left-4 z-50 bg-black/95 text-white p-4 rounded-lg text-xs font-mono max-w-sm border border-gray-600">
          <div className="space-y-1">
            <div className="text-yellow-400 font-bold mb-2">🔄 HERO LOOPING VERIFICATION</div>

            {/* Slide Status */}
            <div className="border-b border-gray-600 pb-2 mb-2">
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? "bg-green-400" : "bg-red-400"}`} />
                Autoplay: {isAutoPlaying ? "✅ Active" : "❌ Paused"}
              </div>
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${isVisible ? "bg-green-400" : "bg-red-400"}`} />
                Visible: {isVisible ? "✅ Yes" : "❌ No"}
              </div>
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${isTransitioning ? "bg-yellow-400" : "bg-green-400"}`} />
                Transitioning: {isTransitioning ? "🔄 Yes" : "✅ No"}
              </div>
            </div>

            {/* Looping Status */}
            <div className="border-b border-gray-600 pb-2 mb-2">
              <div>Current Slide: {currentSlide + 1}/3</div>
              <div>Next Slide: {((currentSlide + 1) % slides.length) + 1}</div>
              <div>Loop Count: {debugInfo.loopCount}</div>
              <div>Total Cycles: {debugInfo.totalCycles}</div>
              <div>Transitions: {debugInfo.transitionCount}</div>
              <div className="text-green-400">
                Loop Status: {debugInfo.loopCount > 0 ? "✅ VERIFIED" : "⏳ Pending"}
              </div>
            </div>

            {/* Slide History */}
            <div className="border-b border-gray-600 pb-2 mb-2">
              <div>Recent History:</div>
              <div className="text-blue-300">
                {debugInfo.slideHistory.slice(-5).map((slide, i) => (
                  <span key={i}>
                    {slide + 1}
                    {i < debugInfo.slideHistory.slice(-5).length - 1 ? "→" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Timing Info */}
            <div className="border-b border-gray-600 pb-2 mb-2">
              <div>Progress: {slideProgress.toFixed(1)}%</div>
              <div>Duration: {SLIDE_DURATION}ms (3.2s)</div>
              <div>Full Cycle: {((SLIDE_DURATION * slides.length) / 1000).toFixed(1)}s</div>
              <div>Transition Out: {TRANSITION_OUT_DURATION}ms</div>
              <div>Transition In: {TRANSITION_IN_DURATION}ms</div>
            </div>

            {/* Video Status */}
            <div>
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${videoLoaded ? "bg-green-400" : "bg-red-400"}`} />
                Video: {videoLoaded ? "✅" : "❌"}
              </div>
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${videoPlaying ? "bg-green-400" : "bg-gray-400"}`} />
                Playing: {videoPlaying ? "▶️" : "⏸️"}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
