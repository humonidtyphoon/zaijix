import { Router, Request, Response } from 'express';

const router = Router();

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// POST /api/contact - Handle contact form submissions
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, company, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return res.status(400).json({ 
        error: 'All fields are required',
        fields: ['name', 'email', 'company', 'message']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format'
      });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing
    res.status(200).json({ 
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
      submittedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process your request. Please try again later.'
    });
  }
});

export default router;

