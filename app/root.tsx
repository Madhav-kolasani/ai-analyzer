import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { init } = usePuterStore();

  useEffect(() => {
    init()
  }, [init]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="TTVf67TA_AsT0w6tIrFzGPhauar9CaZKmoMM1eaDZho" />
        <meta name="description" content="CV Coach by Madhav is an AI Resume Analyzer that helps job seekers optimize their resumes with AI-powered insights. Instantly analyze your resume, identify strengths, and get personalized improvement suggestions to increase your chances of landing interviews. Developed by Madhav, this smart analyzer checks formatting, keywords, and job relevance, making your resume stand out in today’s competitive job market.

          ✅ AI-Powered Insights Get real-time feedback on your resume.
          ✅ Keyword Optimization Match your resume with job descriptions.
          ✅ Easy & Fast Upload your resume and get instant results.
          ✅ Boost Hiring Chances Improve resume quality for better opportunities." />

        <meta name="description" content="CV Coach is your AI-powered resume analyzer that helps you create job-winning resumes. Instantly scan your CV, get personalized feedback, optimize keywords, and improve formatting to boost your chances of landing interviews. Fast, reliable, and designed for every job seeker." />
        <meta name="keywords" content="CV Coach, AI Resume Analyzer, Resume Optimizer, CV Analyzer, Resume Builder, Resume Checker, Job Application Tool, AI Career Coach, ATS Resume Analyzer, Resume Keywords Optimization" />

        <Meta />
        <Links />
      </head>
      <body>
        <script src="https://js.puter.com/v2/"></script>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
