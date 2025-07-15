import React from 'react';
import { Shield, Clock, Users, Brain, Star, ArrowRight, Zap, Target, TrendingUp, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white particles-bg overflow-hidden">
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-600/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-10 animate-fade-in-up">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-black shadow-blue-glow hover-lift-intense">
                <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 animate-pulse" />
                AHORRO GARANTIZADO
                <div className="ml-2 lg:ml-3 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                <span className="block animate-fade-in-up">Compara y</span>
                <span className="block gradient-text text-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Ahorra
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700 font-bold mt-3 lg:mt-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  en Luz y Gas
                </span>
              </h1>
              
              <div className="space-y-4 lg:space-y-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
                  <span className="text-blue-600 font-black text-xl lg:text-2xl xl:text-3xl text-glow">+12 años de experiencia</span> y 
                  <span className="text-blue-600 font-black text-xl lg:text-2xl xl:text-3xl text-glow"> +100 asesores expertos</span> con IA avanzada.
                </p>
                <p className="text-base lg:text-lg text-gray-600 font-bold">
                  🚀 Proceso ultra-rápido • 🤖 Con inteligencia artificial • 🛡️ Totalmente seguro
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="card-impact rounded-2xl p-4 lg:p-6 hover-lift-intense">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-blue-glow">
                    <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-lg lg:text-xl text-gray-900">5 MINUTOS</p>
                    <p className="text-blue-600 font-bold text-sm lg:text-base">Sin llamadas</p>
                  </div>
                </div>
              </div>
              
              <div className="card-impact rounded-2xl p-4 lg:p-6 hover-lift-intense">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-blue-glow">
                    <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-lg lg:text-xl text-gray-900">CON IA</p>
                    <p className="text-blue-600 font-bold text-sm lg:text-base">Avanzada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <a href="#formulario" className="btn-primary text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl hover-lift-intense shine-effect flex items-center justify-center space-x-2 lg:space-x-3 shadow-blue-intense">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                <span>COMPARAR GRATIS</span>
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#formulario" className="border-3 border-blue-600 text-blue-600 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl hover:bg-blue-50 transition-all duration-300 hover-lift-intense shine-effect text-center">
                EMPEZAR FORMULARIO
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 text-base lg:text-lg animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <span className="text-gray-900 font-black text-lg lg:text-xl">4.9/5</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-black text-base lg:text-lg">✅ 100% Gratuito</span>
              <div className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-black text-base lg:text-lg">⚡ Ultra-rápido</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="card-impact rounded-3xl p-6 lg:p-10 shadow-blue-intense hover-lift-intense">
              <div className="space-y-6 lg:space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-base lg:text-lg font-black mb-4 lg:mb-6 shadow-blue-glow">
                    <Brain className="w-4 h-4 lg:w-5 lg:h-5 mr-2 animate-pulse" />
                    IA AVANZADA
                    <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Descubre tu Ahorro
                    <span className="block gradient-text text-glow">Personalizado</span>
                  </h3>
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="text-center space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="flex items-center justify-center space-x-2 lg:space-x-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 lg:p-4 rounded-2xl hover-lift-intense shadow-blue-glow">
                        <span className="text-xl lg:text-2xl">⚡</span>
                        <span className="font-black text-sm lg:text-base">Luz</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 lg:space-x-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 lg:p-4 rounded-2xl hover-lift-intense shadow-blue-glow">
                        <span className="text-xl lg:text-2xl">🔥</span>
                        <span className="font-black text-sm lg:text-base">Gas</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 lg:p-6 border-2 border-blue-200">
                      <p className="text-gray-700 font-bold text-base lg:text-lg">
                        Comparamos <span className="text-blue-600 font-black text-lg lg:text-xl text-glow">TODAS las tarifas</span>
                      </p>
                      <div className="flex items-center justify-center space-x-3 lg:space-x-4 mt-3 lg:mt-4">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                          <span className="text-green-600 font-bold text-sm lg:text-base">Ahorro medio</span>
                        </div>
                        <div className="text-xl lg:text-2xl font-black text-blue-600">200€/año</div>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href="#formulario"
                    className="w-full btn-primary text-white py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl hover-lift-intense shine-effect flex items-center justify-center space-x-2 lg:space-x-3 shadow-blue-intense"
                  >
                    <Target className="w-5 h-5 lg:w-6 lg:h-6" />
                    <span>CALCULAR AHORRO</span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Elementos flotantes optimizados para desktop */}
            <div className="hidden xl:block absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-black shadow-lg animate-bounce">
              <div className="flex items-center space-x-2">
                <Award className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Líderes del sector</span>
              </div>
            </div>
            
            <div className="hidden xl:block absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-green-500 text-green-900 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-black shadow-lg animate-pulse">
              <div className="flex items-center space-x-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}