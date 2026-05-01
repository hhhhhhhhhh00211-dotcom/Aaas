export const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
    <img src={product.image_url} alt={product.name} style={{ width: '100%' }} />
    <h3>{product.name}</h3>
    <p>{product.base_price} SAR</p>
    <button>إضافة للسلة</button>
  </div>
)
