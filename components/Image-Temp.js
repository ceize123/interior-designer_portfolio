import Image from 'next/image'
import { useState } from 'react'
function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ImageTemp({ data }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      src={`https:${data.fields.file.url}`}
      width='0'
      height='0'
      sizes='100vw'
      alt={data.fields.title}
      className={cn(
        'w-full h-auto duration-700 ease-in-out',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
