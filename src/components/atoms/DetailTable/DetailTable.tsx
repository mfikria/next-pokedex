import { Typography } from "@material-tailwind/react"

export type TDetailTable = React.HTMLProps<HTMLDivElement> & {
  title: string
  details: { [field: string]: any }
}

function DetailTable(props: TDetailTable) {
  const { details, title } = props 
  const fields = Object.keys(details)
  return (
    <table tw="table-auto w-full">
      <thead>
        <tr tw="bg-gray-100 text-gray-600">
          <th colSpan={2}>
            <Typography variant="h3">{title}</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {fields.map(field => (
          <tr tw="odd:bg-gray-50 even:bg-white">
            <td tw="py-2 px-4">
              <Typography variant="paragraph" tw="my-1">{field}</Typography>
            </td>
            <td tw="py-2 px-4 w-full">
              <Typography variant="paragraph" tw="my-1 font-medium">{details[field]}</Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DetailTable