import React from 'react';
import { Brain, Pencil, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    color: 'blue',
    title: 'Guided Discovery',
    description: 'Learn through questions that lead you to your own insights and understanding.'
  },
  {
    icon: Pencil,
    color: 'purple',
    title: 'Natural Interaction',
    description: 'Write or draw naturally while engaging in meaningful dialogue.'
  },
  {
    icon: Sparkles,
    color: 'orange',
    title: 'AI Drawing Support',
    description: 'Watch as AI helps visualize concepts alongside your notes. (Future Prospect)'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl">
            <div className={`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-6`}>
              <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}