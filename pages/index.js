import React from 'react'
import Prismic from '@prismicio/client'
import { client } from '../prismic-configuration'

import Slice from '../components/slice'

export default function Index({data}) {
    console.log(data)
    return (
        <div>
            Welcome to Next.js!
            <Slice data={data}/>
        </div>
    )
}

export async function getStaticProps() {
    const res = await client.query(
        Prismic.Predicates.at('document.type', 'landing_page')
    )

    const data = res.results.map((p) => {
        return p.data
    })

    return {
        props: {
            data,
        },
    }
}