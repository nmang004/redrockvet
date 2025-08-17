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

    // Get current date/time for timestamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Premium internal email template optimized for staff workflow
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🚨 New Appointment Request - ${petName}</title>
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
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; line-height: 1.5;">
        
        <!-- Main Container -->
        <div class="container" style="max-width: 640px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);">
          
          <!-- Urgent Priority Header -->
          <div class="header" style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 24px 32px; position: relative;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700;">🚨 NEW APPOINTMENT</h1>
                <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">Requires immediate attention</p>
              </div>
              <div style="text-align: right;">
                <div style="background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                  PRIORITY
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Action Bar -->
          <div style="background: #1e293b; padding: 16px 32px; display: flex; gap: 12px; align-items: center; justify-content: center;">
            <a href="mailto:${email}?subject=Re: Appointment Request for ${petName}&body=Hi ${name},%0D%0A%0D%0AThank you for your appointment request for ${petName}. " 
               class="action-btn" 
               style="background: #10b981; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; transition: all 0.2s;">
              📧 Reply Now
            </a>
            ${phone ? `
            <a href="tel:${phone}" 
               class="action-btn" 
               style="background: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; transition: all 0.2s;">
              📞 Call ${phone}
            </a>
            ` : ''}
            <a href="sms:${phone || ''}${phone ? '?body=Hi ' + name + ', this is Red Rock Veterinary Health regarding ' + petName + "'s appointment request." : ''}" 
               class="action-btn" 
               style="background: #8b5cf6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; transition: all 0.2s;">
              💬 Text
            </a>
          </div>

          <!-- Content -->
          <div class="content" style="padding: 32px;">
            
            <!-- Timestamp -->
            <div style="background: #f1f5f9; border-left: 4px solid #3b82f6; padding: 12px 16px; margin-bottom: 24px; border-radius: 0 6px 6px 0;">
              <p style="margin: 0; color: #1e293b; font-weight: 600; font-size: 13px;">
                📅 Received: ${timestamp}
              </p>
            </div>

            <!-- Key Information Grid -->
            <div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
              
              <!-- Owner Card -->
              <div class="info-item" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
                <h3 style="margin: 0 0 12px 0; color: #1e293b; font-size: 16px; font-weight: 700; display: flex; align-items: center;">
                  👤 Owner
                </h3>
                <div style="space-y: 8px;">
                  <div style="margin-bottom: 8px;">
                    <span style="font-weight: 700; color: #1e293b; font-size: 18px;">${name}</span>
                  </div>
                  <div style="margin-bottom: 8px;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500; font-size: 14px;">
                      ✉️ ${email}
                    </a>
                  </div>
                  ${phone ? `
                  <div>
                    <a href="tel:${phone}" style="color: #059669; text-decoration: none; font-weight: 500; font-size: 14px;">
                      📱 ${phone}
                    </a>
                  </div>
                  ` : ''}
                </div>
              </div>

              <!-- Pet Card -->
              <div class="info-item" style="background: linear-gradient(135deg, #fef7ff 0%, #f3e8ff 100%); padding: 20px; border-radius: 8px; border: 1px solid #c084fc;">
                <h3 style="margin: 0 0 12px 0; color: #581c87; font-size: 16px; font-weight: 700; display: flex; align-items: center;">
                  🐾 Patient
                </h3>
                <div>
                  <div style="margin-bottom: 8px;">
                    <span style="font-weight: 700; color: #581c87; font-size: 18px;">${petName}</span>
                  </div>
                  ${service ? `
                  <div>
                    <span style="background: #a855f7; color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                      ${service}
                    </span>
                  </div>
                  ` : ''}
                </div>
              </div>
            </div>

            ${message ? `
            <!-- Message Section -->
            <div style="margin-bottom: 24px;">
              <h3 style="margin: 0 0 12px 0; color: #1e293b; font-size: 16px; font-weight: 700; display: flex; align-items: center;">
                💬 Customer Message
              </h3>
              <div style="background: #fff7ed; border: 1px solid #fed7aa; padding: 20px; border-radius: 8px; border-left: 4px solid #ea580c;">
                <p style="margin: 0; color: #9a3412; font-size: 15px; line-height: 1.6; font-style: italic;">
                  "${message.replace(/\n/g, '<br>')}"
                </p>
              </div>
            </div>
            ` : ''}

            <!-- Quick Actions Section -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 2px dashed #cbd5e1; text-align: center;">
              <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 16px; font-weight: 700;">
                ⚡ Quick Actions
              </h3>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <button style="background: #059669; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; font-size: 12px; cursor: pointer;">
                  ✅ SCHEDULE
                </button>
                <button style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; font-size: 12px; cursor: pointer;">
                  ❌ DECLINE
                </button>
                <button style="background: #7c3aed; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; font-size: 12px; cursor: pointer;">
                  📋 MORE INFO
                </button>
                <button style="background: #ea580c; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; font-size: 12px; cursor: pointer;">
                  🔄 FOLLOW UP
                </button>
              </div>
            </div>

          </div>

          <!-- Footer -->
          <div style="background: #1e293b; color: #94a3b8; padding: 20px 32px; text-align: center; font-size: 12px;">
            <div style="margin-bottom: 8px;">
              <strong style="color: #f1f5f9;">Red Rock Veterinary Health</strong> • Internal Staff Email
            </div>
            <div>
              🏥 3163 W. Colorado Ave, Colorado Springs, CO 80904 • 📞 (719) 204-3647
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