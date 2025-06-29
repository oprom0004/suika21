interface GameEmbedProps {
  src: string
  title: string
  className?: string
}

export function GameEmbed({ src, title, className = "w-full h-96" }: GameEmbedProps) {
  return (
    <iframe
      src={src}
      title={title}
      className={className}
      frameBorder="0"
      allowFullScreen
      loading="lazy"
      allow="gamepad; microphone; camera"
    />
  )
}
