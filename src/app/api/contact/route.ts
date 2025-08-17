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

    // Get current date/time for timestamp in Mountain Time (Colorado Springs)
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Denver',
      timeZoneName: 'short'
    });

    // Elegant internal email template with Red Rock branding
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Appointment Request - ${petName}</title>
        <style>
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; margin: 0 !important; }
            .header { padding: 20px !important; }
            .content { padding: 20px !important; }
            .action-btn { display: block !important; margin: 8px 0 !important; width: 100% !important; }
            .info-grid { display: block !important; }
            .info-item { margin-bottom: 16px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafb; line-height: 1.5;">
        
        <!-- Main Container -->
        <div class="container" style="max-width: 640px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); border: 1px solid #e5e7eb;">
          
          <!-- Red Rock Branded Header -->
          <div class="header" style="background: linear-gradient(135deg, #B31B1B 0%, #9d1717 100%); color: white; padding: 28px 32px; position: relative;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <h1 style="margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.025em;">🐾 New Appointment Request</h1>
                <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9; font-weight: 400;">Red Rock Veterinary Health</p>
              </div>
              <div style="text-align: right;">
                <div style="background: rgba(255,255,255,0.15); padding: 6px 12px; border-radius: 12px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                  New Request
                </div>
              </div>
            </div>
          </div>

          <!-- Clean Action Bar -->
          <div style="background: #F5F5F5; border-bottom: 1px solid #e5e7eb; padding: 20px 32px; display: flex; gap: 12px; align-items: center; justify-content: center;">
            <a href="mailto:${email}?subject=Re: Appointment Request for ${petName}&body=Hi ${name},%0D%0A%0D%0AThank you for your appointment request for ${petName}. " 
               class="action-btn" 
               style="background: #B31B1B; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 13px; display: inline-block; box-shadow: 0 1px 3px rgba(179, 27, 27, 0.3);">
              ✉️ Reply
            </a>
            ${phone ? `
            <a href="tel:${phone}" 
               class="action-btn" 
               style="background: #2C2C2C; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 13px; display: inline-block; box-shadow: 0 1px 3px rgba(44, 44, 44, 0.3);">
              📞 Call
            </a>
            ` : ''}
            <a href="sms:${phone || ''}${phone ? '?body=Hi ' + name + ', this is Red Rock Veterinary Health regarding ' + petName + "'s appointment request." : ''}" 
               class="action-btn" 
               style="background: #7A7A7A; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 13px; display: inline-block; box-shadow: 0 1px 3px rgba(122, 122, 122, 0.3);">
              💬 Text
            </a>
          </div>

          <!-- Content -->
          <div class="content" style="padding: 32px;">
            
            <!-- Elegant Timestamp -->
            <div style="background: #F5F5F5; border-left: 3px solid #B31B1B; padding: 14px 18px; margin-bottom: 28px; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; color: #2C2C2C; font-weight: 500; font-size: 13px;">
                📅 Received: ${timestamp}
              </p>
            </div>

            <!-- Clean Information Grid -->
            <div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px;">
              
              <!-- Owner Card -->
              <div class="info-item" style="background: #F0F0F0; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
                <h3 style="margin: 0 0 16px 0; color: #2C2C2C; font-size: 15px; font-weight: 600; display: flex; align-items: center; text-transform: uppercase; letter-spacing: 0.5px; font-size: 12px;">
                  👤 Owner
                </h3>
                <div>
                  <div style="margin-bottom: 12px;">
                    <span style="font-weight: 600; color: #2C2C2C; font-size: 18px;">${name}</span>
                  </div>
                  <div style="margin-bottom: 10px;">
                    <a href="mailto:${email}" style="color: #B31B1B; text-decoration: none; font-weight: 500; font-size: 14px;">
                      ✉️ ${email}
                    </a>
                  </div>
                  ${phone ? `
                  <div>
                    <a href="tel:${phone}" style="color: #B31B1B; text-decoration: none; font-weight: 500; font-size: 14px;">
                      📱 ${phone}
                    </a>
                  </div>
                  ` : ''}
                </div>
              </div>

              <!-- Pet Card -->
              <div class="info-item" style="background: #F0F0F0; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
                <h3 style="margin: 0 0 16px 0; color: #2C2C2C; font-size: 15px; font-weight: 600; display: flex; align-items: center; text-transform: uppercase; letter-spacing: 0.5px; font-size: 12px;">
                  🐾 Patient
                </h3>
                <div>
                  <div style="margin-bottom: 12px;">
                    <span style="font-weight: 600; color: #2C2C2C; font-size: 18px;">${petName}</span>
                  </div>
                  ${service ? `
                  <div>
                    <span style="background: #B31B1B; color: white; padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 500;">
                      ${service}
                    </span>
                  </div>
                  ` : ''}
                </div>
              </div>
            </div>

            ${message ? `
            <!-- Message Section -->
            <div style="margin-bottom: 28px;">
              <h3 style="margin: 0 0 14px 0; color: #2C2C2C; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; font-size: 12px;">
                💬 Customer Message
              </h3>
              <div style="background: #F0F0F0; border: 1px solid #e5e7eb; padding: 20px; border-radius: 10px; border-left: 3px solid #B31B1B;">
                <p style="margin: 0; color: #2C2C2C; font-size: 15px; line-height: 1.6; font-style: italic;">
                  "${message.replace(/\n/g, '<br>')}"
                </p>
              </div>
            </div>
            ` : ''}

          </div>

          <!-- Clean Footer -->
          <div style="background: #F5F5F5; border-top: 1px solid #e5e7eb; color: #7A7A7A; padding: 24px 32px; text-align: center; font-size: 12px;">
            <div style="margin-bottom: 6px;">
              <strong style="color: #2C2C2C;">Red Rock Veterinary Health</strong> • Staff Notification
            </div>
            <div style="color: #7A7A7A;">
              3163 W. Colorado Ave, Colorado Springs, CO 80904 • (719) 204-3647
            </div>
          </div>

        </div>
      </body>
      </html>
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