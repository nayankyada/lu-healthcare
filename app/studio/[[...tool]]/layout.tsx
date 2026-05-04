export default function StudioLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <head></head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
