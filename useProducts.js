import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.from('products').select('*')
      if (error) throw error
      setProducts(data)
    } catch (err) {
      console.error("Error fetching:", err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchProducts() }, [])

  return { products, loading }
}
