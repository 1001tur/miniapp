import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full rounded-2xl shadow-lg p-4 text-center">
        <motion.h1 
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          🌍 1001 Тур
        </motion.h1>
        <p className="text-gray-600 mb-4">
          Ищи лучшие туры прямо в Telegram
        </p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button 
            className="w-full text-lg py-6 mt-2" 
            onClick={() => window.location.href = "https://sletat.ru"} // ← временно, позже заменим
          >
            Начать поиск туров
          </Button>
        </motion.div>
      </Card>
    </div>
  );
}
