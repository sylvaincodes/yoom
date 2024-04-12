function Error({ statusCode }: { statusCode: string }) {
    return (
        <p>
            {statusCode
                ? `Une erreur ${statusCode} a été produite sur le serveur`
                : 'Une erreur a été produite'}
        </p>
    )
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error