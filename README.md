# civic-duty.ai

An educational AI-powered tool that allows users to explore different political perspectives on various topics by selecting positions along political spectrums.

![civic-duty.ai](https://img.shields.io/badge/civic--duty.ai-Educational%20Tool-purple)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-38B2AC)

## 🎯 Overview

civic-duty.ai helps users understand how different political perspectives frame the same issues. Users select a position on an interactive political spectrum dial, ask questions about political or social topics, and receive AI-generated responses that authentically represent that perspective.

**Key Features:**
- 🎨 Interactive circular spectrum selector
- 🤖 AI-powered perspective responses using Claude (Anthropic)
- 📚 Educational disclaimers and context
- 📱 Fully responsive design
- ♿ Accessible with ARIA labels and keyboard navigation

## 🗺️ Political Perspectives

### Conservative Spectrum (Blue)
- **Moderate Conservative** - Pragmatic conservative approach
- **Center-Right** - Traditional conservative values, fiscal responsibility
- **Far-Right MAGA** - America First rhetoric, populist framing

### Liberal Spectrum (Red)
- **Center-Left Liberal** - Moderate liberal, pragmatic reform
- **Progressive** - Bold progressive policies, social justice emphasis
- **Far-Left** - Revolutionary rhetoric, systemic change focus

### Cynical Spectrum (Black)
- **Cynical/Disengaged** - Institutional distrust, both-sides criticism

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- Anthropic API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/civic-duty-ai.git
   cd civic-duty-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
civic-duty-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── explore/
│   │   │   └── page.tsx          # Main app interface
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── disclaimer/
│   │   │   └── page.tsx          # Legal disclaimers
│   │   ├── api/
│   │   │   └── generate-response/
│   │   │       └── route.ts      # API endpoint
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── SpectrumSelector.tsx  # Circular spectrum dial
│   │   ├── QuestionInput.tsx     # Question form
│   │   ├── ResponseDisplay.tsx   # Shows AI response
│   │   ├── Header.tsx            # Site header/nav
│   │   └── Footer.tsx            # Site footer
│   └── lib/
│       ├── anthropic.ts          # Claude API integration
│       ├── prompts.ts            # System prompt definitions
│       └── types.ts              # TypeScript types
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables:
   - `ANTHROPIC_API_KEY` - Your Anthropic API key
   - `NEXT_PUBLIC_SITE_URL` - Your production URL
4. Deploy!

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Your Anthropic API key for Claude |
| `NEXT_PUBLIC_SITE_URL` | No | Your site URL (for meta tags) |

### Rate Limiting

The API includes basic rate limiting:
- 10 requests per minute per IP
- Configurable in `src/app/api/generate-response/route.ts`

## 🎨 Customization

### Adding New Perspectives

1. Add the perspective ID to `src/lib/types.ts`
2. Add the system prompt to `src/lib/prompts.ts`
3. Add the perspective configuration (color, angle, etc.)
4. Update the `SpectrumSelector` component if needed

### Modifying System Prompts

Edit the prompts in `src/lib/prompts.ts` to adjust how each perspective responds. Remember to:
- Maintain authenticity without creating caricatures
- Keep ethical guardrails in place
- Test responses across various question types

## 📝 Important Notes

### Educational Purpose

This tool is designed for **educational purposes only**. The AI-generated responses:
- Simulate how someone with that perspective might respond
- Are not factually verified
- Do not represent the views of the creators
- Should not be used as a source of political advice

### Ethical Guidelines

All responses are bounded by ethical guardrails that prevent:
- Calls for violence
- Hate speech or slurs
- Dehumanizing language
- Promotion of illegal activities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Powered by [Anthropic's Claude](https://www.anthropic.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Disclaimer:** This tool generates simulated political perspectives for educational purposes. Responses do not represent the views of the creators. For more information, see the [Disclaimer](/disclaimer) page.
