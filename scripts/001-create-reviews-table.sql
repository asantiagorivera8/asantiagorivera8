-- Create reviews table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  empresa VARCHAR(150),
  cargo VARCHAR(100),
  calificacion INTEGER NOT NULL CHECK (calificacion >= 1 AND calificacion <= 5),
  titulo VARCHAR(200) NOT NULL,
  contenido TEXT NOT NULL,
  servicio VARCHAR(100),
  aprobado BOOLEAN DEFAULT false,
  destacado BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert reviews (public form)
CREATE POLICY "Anyone can submit reviews" ON reviews
  FOR INSERT
  WITH CHECK (true);

-- Policy: Anyone can read approved reviews
CREATE POLICY "Anyone can read approved reviews" ON reviews
  FOR SELECT
  USING (aprobado = true);

-- Policy: Service role can do everything (for admin)
CREATE POLICY "Service role full access" ON reviews
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create index for faster queries
CREATE INDEX idx_reviews_aprobado ON reviews(aprobado);
CREATE INDEX idx_reviews_destacado ON reviews(destacado);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);
