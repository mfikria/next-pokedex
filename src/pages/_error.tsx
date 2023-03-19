import Link from 'next/link';
import Typography from '~/components/atoms/Typography';

export default function Error({ statusCode }) {
    return (
      <div
        tw="
          flex
          flex-col
          w-[100vw]
          h-[100vh]
          items-center
          justify-center
        "
      >
        {statusCode && <Typography variant="h2" tw="font-bold text-lg">Error: {statusCode}</Typography>}
        <Typography>We are sorry! There was an error</Typography>
        <Link tw="cursor-pointer underline" href="/">
          Go back home
        </Link>
      </div>
    )
  }

  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  