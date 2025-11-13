import { motion } from 'framer-motion';

interface ServiceCardProps {
  numberIcon: string;
  title: string;
  description: string;
  index?: number;
  image?: string;
  price?: string;
}

export const ServiceCard = ({ numberIcon, title, description, index = 0, image, price }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-neon transition-all duration-300 border-2 border-neon/30 hover:border-neon group overflow-hidden"
    >
      {image && (
        <div className="w-full h-80 md:h-96 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="font-heading text-xl md:text-2xl text-white mb-3 uppercase tracking-wider text-center">{title}</h3>
        {price && (
          <div className="text-center mb-4">
            <span className="font-heading text-2xl md:text-3xl text-neon font-bold">{price}</span>
          </div>
        )}
        <p className="font-body text-sm md:text-base text-white leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
