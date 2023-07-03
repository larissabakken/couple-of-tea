import AWS from 'aws-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

AWS.config.update({
  accessKeyId: `AKIAVPVZRINDSPNLKEWL`,
  secretAccessKey: `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`,
  region: 'sa-east-1',
})

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const ses = new AWS.SES()

  const params = {
    Destination: {
      ToAddresses: ['larissabakken@icloud.com', 'astridbakken95@gmail.com'], // substitua pelo endereço de e-mail do destinatário
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello, world!', // substitua pelo conteúdo do e-mail
        },
      },
      Subject: {
        Data: 'Test Email', // substitua pelo assunto do e-mail
      },
    },
    Source: 'larissabakken@gmail.com', // substitua pelo endereço de e-mail do remetente
  }

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: `Error -> ${err}` })
    } else {
      console.log('Email sent successfully')
      res.status(200).json({ message: 'Email sent successfully' })
    }
  })
}
