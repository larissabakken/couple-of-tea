import React from 'react'

const SendEmail = () => {
  const handleEmail = async () => {
    try {
      const response = await fetch('/api/email', { method: 'POST' })
      if (response.ok) {
        console.log('Email sent successfully')
      } else {
        console.error('Failed to send email:', response.status)
      }
    } catch (error) {
      console.error('Failed to send email:', error)
    }
  }

  return (
    <div>
      <button onClick={handleEmail}>Enviar Email</button>
    </div>
  )
}

export default SendEmail
