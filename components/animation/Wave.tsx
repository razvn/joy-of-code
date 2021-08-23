interface WaveProps {
  duration?: number
  delay?: number
  children: React.ReactChild
  style?: {
    [key: string]: string
  }
}

export function Wave({
  duration = 300,
  delay = 0,
  children,
  ...props
}: WaveProps) {
  return (
    <div
      {...props}
      style={{
        ...(props.style ?? {}),
        animationName: 'wave',
        animationFillMode: 'backwards',
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}