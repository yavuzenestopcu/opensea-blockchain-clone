import Link from 'next/link'

type parameters = {
  collectionId: string
}


export default function Collection({ params }: { params: parameters }) {
  console.log(params)
  console.log(params.collectionId)
  return (
    <Link href='/'>
      <h2>{params.collectionId}</h2>
    </Link>
  )
}