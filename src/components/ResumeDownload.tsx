import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Parisa_Gunasekhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={handleDownload}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform animate-pulse-glow flex items-center gap-3"
        >
          <Download size={24} />
          Download My Resume
        </motion.button>
      </div>
    </section>
  );
};

export default ResumeDownload;
