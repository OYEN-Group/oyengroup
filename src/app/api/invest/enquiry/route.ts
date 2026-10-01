import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, investmentRange } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'OYEN Investor Enquiries <onboarding@resend.dev>',
      to: ['oyengroupp@gmail.com'],
      replyTo: email,
      subject: `New Investor Enquiry — ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          
          <div style="background: #09251F; padding: 32px 40px;">
            <p style="color: #D5A547; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px 0;">Investment Enquiry</p>
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0; line-height: 1.2;">New Investor Enquiry</h1>
          </div>

          <div style="padding: 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 14px 0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9ca3af; width: 40%;">Name</td>
                <td style="padding: 14px 0; font-size: 15px; color: #111719; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 14px 0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9ca3af;">Email</td>
                <td style="padding: 14px 0; font-size: 15px; color: #111719;">
                  <a href="mailto:${email}" style="color: #007079; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 14px 0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9ca3af;">Phone / WhatsApp</td>
                <td style="padding: 14px 0; font-size: 15px; color: #111719;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9ca3af;">Investment Range</td>
                <td style="padding: 14px 0;">
                  <span style="background: #D5A547; color: #09251F; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 4px; letter-spacing: 1px;">${investmentRange || '—'}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 32px; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #D5A547;">
              <p style="margin: 0; font-size: 13px; color: #59636D; line-height: 1.6;">
                Reply directly to this email to respond to <strong>${name}</strong>. Their email is set as the reply-to address.
              </p>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 20px 40px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 11px; color: #9ca3af; letter-spacing: 1px; text-transform: uppercase;">
              OYEN GROUP · Investment Enquiry System · oyengroup.com
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the investor
    await resend.emails.send({
      from: 'OYEN GROUP <onboarding@resend.dev>',
      to: [email],
      subject: 'We have received your enquiry — OYEN GROUP',
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          
          <div style="background: #09251F; padding: 32px 40px;">
            <p style="color: #D5A547; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px 0;">OYEN GROUP</p>
            <h1 style="color: #ffffff; font-size: 26px; font-weight: 700; margin: 0; line-height: 1.3;">Thank you, ${name}.</h1>
          </div>

          <div style="padding: 40px;">
            <p style="font-size: 16px; color: #59636D; line-height: 1.7; margin: 0 0 20px 0;">
              We have received your investment enquiry and a member of the OYEN team will be in touch shortly to arrange a conversation.
            </p>
            <p style="font-size: 16px; color: #59636D; line-height: 1.7; margin: 0 0 32px 0;">
              In the meantime, you are welcome to explore more about our technology and approach on the OYEN website.
            </p>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
              <p style="font-size: 13px; color: #9ca3af; line-height: 1.6; margin: 0;">
                This confirmation is provided for discussion purposes only. Formal investment documentation will be provided following your investor discussion with the OYEN team. Prospective investors should obtain independent professional advice where appropriate.
              </p>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 20px 40px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 11px; color: #9ca3af; letter-spacing: 1px; text-transform: uppercase;">
              OYEN GROUP · Africa and Beyond · oyengroup.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Investor enquiry email error:', error);
    return NextResponse.json({ error: 'Failed to send enquiry. Please try again.' }, { status: 500 });
  }
}
