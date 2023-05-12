import * as Separator from '@radix-ui/react-separator'

type DividerProps = {
  color?: string
  additionalClasses?: string
  dataOrientation: 'vertical' | 'horizontal'
}

export function Divider({
  additionalClasses = '',
  dataOrientation,
  color
}: DividerProps) {
  const barColor = color ? color : 'bg-neutral opacity-12'
  return (
    <Separator.Root
      data-orientation={dataOrientation}
      className={`data-[orientation=horizontal]:h-[0.0625rem] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px] ${barColor} ${additionalClasses}`}
    />
  )
}
