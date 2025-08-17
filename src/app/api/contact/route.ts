import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, petName, service, message } = body;

    // Validate required fields
    if (!name || !email || !petName) {
      return NextResponse.json(
        { error: 'Name, email, and pet name are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <h2>New Appointment Request</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        
        <h3>Pet Information</h3>
        <p><strong>Pet's Name:</strong> ${petName}</p>
        ${service ? `<p><strong>Service Requested:</strong> ${service}</p>` : ''}
        
        ${message ? `
          <h3>Message</h3>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        ` : ''}
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          This appointment request was submitted through the Red Rock Veterinary Health website contact form.
        </p>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Red Rock Veterinary Health <noreply@redrockvet.com>',
      to: ['reception@redrockvet.com'],
      subject: `New Appointment Request - ${petName} (${name})`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Appointment request sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}