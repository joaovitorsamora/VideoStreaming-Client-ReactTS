export const Footer = () => {
  const date = new Date().getFullYear()

  return <footer className="text-center py-6 bg-black text-white">{`Copyright ${date} © - ClipStream`}</footer>
}
