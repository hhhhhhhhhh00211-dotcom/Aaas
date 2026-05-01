import { useProducts } from '../hooks/useProducts'
import { ProductCard } from '../components/ProductCard'

const Home = () => {
  const { products, loading } = useProducts()

  if (loading) return <p>جاري تحميل أحدث الموديلات...</p>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default Home
