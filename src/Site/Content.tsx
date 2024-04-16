import React from 'react'
import Table from '../HtmlComponent/Table'

const Content = (props: any) => {
    return (
        <main>
            <Table
                items={props.items} />
        </main>
    )
}

export default Content
