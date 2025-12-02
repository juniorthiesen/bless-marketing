// Substitua pelo seu Pixel ID real
export const PIXEL_ID = 'SEU_PIXEL_ID_AQUI'; 

// URL do seu Webhook (n8n, Zapier, Make) para processar CAPI server-side
const WEBHOOK_URL = 'https://seu-webhook-url.com/api/conversion';

type EventType = 'PageView' | 'Lead' | 'InitiateCheckout' | 'Purchase' | 'ViewContent';

interface EventData {
  currency?: string;
  value?: number;
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  num_items?: number;
  user_data?: {
    em?: string; // email (hashed)
    ph?: string; // phone (hashed)
    fn?: string; // first name (hashed)
  };
}

/**
 * Dispara evento no Browser (Pixel)
 */
export const trackPixelEvent = (eventName: EventType, data: EventData = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
    console.log(`📡 Pixel Event: ${eventName}`, data);
  }
};

/**
 * Inicializa o Pixel
 */
export const initPixel = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('init', PIXEL_ID);
    (window as any).fbq('track', 'PageView');
  }
};

/**
 * Envia dados para Webhook (Para processamento CAPI Server-Side)
 * O webhook deve ser configurado para receber esse JSON e enviar para a Graph API do Facebook.
 */
export const sendToWebhook = async (eventName: EventType, eventData: EventData, userData: any) => {
  try {
    const payload = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      user_data: {
        // Em um cenário real, você deve hashear (SHA256) esses dados antes de enviar ou enviar via HTTPS seguro
        // para que o servidor faça o hash antes de mandar pro Facebook
        phone: userData.phone,
        username: userData.username,
        client_user_agent: navigator.userAgent,
      },
      custom_data: eventData
    };

    // Descomente abaixo quando tiver o webhook real configurado
    // await fetch(WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // });
    
    console.log(`🚀 Webhook Sent (${eventName}):`, payload);
  } catch (error) {
    console.error('Erro ao enviar para webhook:', error);
  }
};