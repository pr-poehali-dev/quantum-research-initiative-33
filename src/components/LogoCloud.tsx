import { motion } from "framer-motion"

const stats = [
  { value: "10 млн+", label: "игроков по всему миру" },
  { value: "100+", label: "уникальных скинов" },
  { value: "50+", label: "миссий и заданий" },
  { value: "24/7", label: "онлайн-сервера" },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Присоединяйся к крупнейшему криминальному миру.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            От уличных гонщиков до магнатов преступного мира.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-1">
                <span className="text-white font-bold text-2xl">{stat.value}</span>
                <span className="text-zinc-500 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}