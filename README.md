# Portfolio

## Contact Form Setup

This project uses Formspree for the contact form.

1. Create a form at Formspree and copy your endpoint URL.
2. Create a `.env.local` file in the project root.
3. Add this variable:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

4. Restart the dev server.

Once that is set, the form in `src/components/Contact.tsx` will submit directly to Formspree.
