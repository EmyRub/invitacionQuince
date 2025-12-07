import { useEffect, useRef, useState } from 'react'

export function useFadeIn() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return { ref, show }
}