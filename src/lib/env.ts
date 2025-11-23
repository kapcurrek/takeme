const requiredEnvVars = [
    'DATABASE_URL',
    'AUTH_SECRET',
    'NEXT_PUBLIC_APP_URL'
] as const

requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
        throw new Error(`Missing environment variable: ${envVar}`)
    }
})

export const env = {
    database: {
        url: process.env.DATABASE_URL!
    },
    auth: {
        secret: process.env.AUTH_SECRET!
    },
    app: {
        url: process.env.NEXT_PUBLIC_APP_URL!,
        baseDomain: process.env.NEXT_PUBLIC_BASE_DOMAIN!
    }
}