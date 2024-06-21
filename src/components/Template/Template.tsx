type TemplateProps = {
  prop1: string
  prop2: string
}

export const Template = ({ prop1, prop2 }: TemplateProps) => {
  return (
    <div>
      <div>prop1 = {prop1}</div>
      <div>prop2 = {prop2}</div>
    </div>
  )
}
