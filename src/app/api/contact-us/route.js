import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
    cleanText,
    escapeHtml,
    isAllowedOrigin,
    isValidEmail,
} from '@/lib/security'

export async function POST(request) {
    try {
        if (!isAllowedOrigin(request)) {
            return NextResponse.json({ error: 'Forbidden origin' }, { status: 403 })
        }

        const { name, email, mobile, company, projectLocation, serviceNeeded, message } = await request.json()
        const safeName = cleanText(name, 80)
        const safeEmail = cleanText(email, 254)
        const safeMobile = cleanText(mobile, 40)
        const safeCompany = cleanText(company, 120)
        const safeProjectLocation = cleanText(projectLocation, 120)
        const safeServiceNeeded = cleanText(serviceNeeded, 160)
        const safeMessage = cleanText(message, 2000)

        if (!safeName || !safeEmail || !safeMobile) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
        }

        if (!isValidEmail(safeEmail)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        })

        const adminMail = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Hello Jef you have a Lead to get in touch !! Hurry',
            html: `
        <p>Hi JEF</p>
        <p>You have a new message from the contact form. Here are the details:</p>
        <p><strong>Name:</strong> ${escapeHtml(safeName)}<br>
        <strong>Email:</strong> ${escapeHtml(safeEmail)}<br>
        <strong>Phone Number:</strong> ${escapeHtml(safeMobile)}<br>
        <strong>Company:</strong> ${escapeHtml(safeCompany || 'Not provided')}<br>
        <strong>Project Location:</strong> ${escapeHtml(safeProjectLocation || 'Not provided')}<br>
        <strong>Service Needed:</strong> ${escapeHtml(safeServiceNeeded || 'Not provided')}</p>
        <p><strong>Message:</strong><br>${escapeHtml(safeMessage || 'Not provided')}</p>
        <p>Call up the client, Its urgent need you attention.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `,
        }

        const autoReply = {
            from: process.env.EMAIL,
            to: safeEmail,
            subject: 'JEF UAE IS READY TO GET IN TOUCH SHORTLY !',
            html: `
        <p>Hi ${escapeHtml(safeName)},</p>
        <p>We&apos;ll do our best to respond within 1-2 business days. In the meantime, feel free to browse our website for more information.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `,
        }

        await transporter.sendMail(adminMail)
        await transporter.sendMail(autoReply)

        return NextResponse.json({ message: 'Form submission successful!' })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }
}
