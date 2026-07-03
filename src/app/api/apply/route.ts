import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const location = formData.get('location') as string;
    const visa = formData.get('visa') as string;
    const message = formData.get('message') as string;
    const files = formData.getAll('files') as File[];

    // Validate required fields
    if (!name || !phone || !email || !location || !visa) {
      return NextResponse.json(
        { success: false, error: 'All fields except message and file are required.' },
        { status: 400 }
      );
    }

    // SMTP Configuration
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    if (!smtpUser || !smtpPass) {
      console.warn('SMTP credentials are not configured in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured. Please check SMTP environment variables.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Construct beautiful HTML email content
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 0;">New Visa Application Received</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 12px; font-weight: bold; color: #475569; width: 35%; border-bottom: 1px solid #e2e8f0;">Full Name</td>
            <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number</td>
            <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${phone}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Email Address</td>
            <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Location</td>
            <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${location}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Visa Category</td>
            <td style="padding: 12px; font-weight: bold; color: #dc2626; border-bottom: 1px solid #e2e8f0;">${visa}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px;">
          <h4 style="margin-top: 0; margin-bottom: 8px; color: #334155;">Message / Cover Letter:</h4>
          <p style="margin: 0; color: #475569; line-height: 1.5; white-space: pre-wrap;">${message || 'No message provided.'}</p>
        </div>

        ${files && files.length > 0 ? `
          <div style="margin-top: 20px; padding: 12px; border: 1px dashed #cbd5e1; border-radius: 8px; background-color: #f8fafc;">
            <p style="margin: 0 0 10px 0; color: #475569; font-size: 14px;"><strong>📎 Attachments:</strong></p>
            <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px;">
              ${files.map(f => `<li>${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)</li>`).join('')}
            </ul>
          </div>
        ` : `
          <div style="margin-top: 20px; text-align: center; color: #94a3b8; font-size: 14px;">
            No document attachments provided.
          </div>
        `}

        <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px;">
          This is an automated notification from your Canada Visa website application form.
        </div>
      </div>
    `;

    const mailOptions: any = {
      from: `"Canada Visa System" <${smtpUser}>`,
      to: smtpTo,
      subject: `[New Visa Application] ${visa} - ${name}`,
      text: `New Application Details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}\nVisa: ${visa}\nMessage: ${message || 'N/A'}`,
      html: htmlContent,
    };

    // Attach files if uploaded
    if (files && files.length > 0) {
      mailOptions.attachments = await Promise.all(
        files.map(async (f) => {
          const arrayBuffer = await f.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          return {
            filename: f.name,
            content: buffer,
          };
        })
      );
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Thanks for the application, we will contact you soon...',
    });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'An error occurred while sending the application. Please try again.',
      },
      { status: 500 }
    );
  }
}
