import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddProduct = () => {
  TabTitle('GlobalBazaar - Add Product');
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    imageUrl: '',
    name: '',
    quantity: '',
    minSellingQuantity: '',
    brand: '',
    category: '',
    shortDescription: '',
    productContent: '',
    price: '',
    rating: '',
    email: user?.email,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Electronics',
    'Home',
    'Fashion',
    'Machinery',
    'Health',
    'Automotive',
    'Office',
    'Medicine',
    'Food',
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.imageUrl)
      newErrors.imageUrl = 'Product image URL is required';
    if (!formData.name) newErrors.name = 'Product name is required';
    if (!formData.mainQuantity || formData.mainQuantity < 1)
      newErrors.mainQuantity = 'Quantity must be at least 1';
    if (!formData.minSellingQuantity || formData.minSellingQuantity < 1)
      newErrors.minSellingQuantity =
        'Minimum selling quantity must be at least 1';
    if (!formData.brand) newErrors.brand = 'Brand name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.shortDescription || formData.shortDescription.length > 200)
      newErrors.shortDescription =
        'Description is required and should be less than 200 characters';
    if (!formData.productContent)
      newErrors.productContent = 'Product Content required';
    if (!formData.price || formData.price <= 0)
      newErrors.price = 'Price must be greater than 0';
    if (!formData.rating || formData.rating < 1 || formData.rating > 5)
      newErrors.rating = 'Rating must be between 1 and 5';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        console.log('Form data:', formData);
        // Simulate API call
        axiosSecure
          .post('https://b11-assignment-11.vercel.app/products', formData)
          .then(res => {
            navigate('/allProduct');
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });

        // Reset form
        setFormData({
          imageUrl: '',
          name: '',
          mainQuantity: '',
          minSellingQuantity: '',
          brand: '',
          category: '',
          shortDescription: '',
          price: '',
          rating: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#eef4ff] dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Add New Product
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image URL Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Product Image URL
                </label>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                      {formData.imageUrl ? (
                        <img
                          src={formData.imageUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src =
                              'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e8d4a3b9a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e8d4a3b9a%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22320.1%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                          }}
                        />
                      ) : (
                        <svg
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                      className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                    />
                    {errors.imageUrl && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.imageUrl}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Quantity and Minimum Selling Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="mainQuantity"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Main Quantity
                  </label>
                  <input
                    type="number"
                    id="mainQuantity"
                    name="mainQuantity"
                    min="1"
                    value={formData.mainQuantity}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                  />
                  {errors.mainQuantity && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.mainQuantity}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="minSellingQuantity"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Minimum Selling Quantity
                  </label>
                  <input
                    type="number"
                    id="minSellingQuantity"
                    name="minSellingQuantity"
                    min="1"
                    value={formData.minSellingQuantity}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                  />
                  {errors.minSellingQuantity && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.minSellingQuantity}
                    </p>
                  )}
                </div>
              </div>

              {/* Brand and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                  />
                  {errors.brand && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.brand}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label
                  htmlFor="shortDescription"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Short Description
                </label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                />
                {errors.shortDescription && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.shortDescription}
                  </p>
                )}
              </div>

              {/* Price and Rating */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Price (per unit)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      step="0.01"
                      min="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                    />
                  </div>
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.price}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                  />
                  {errors.rating && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.rating}
                    </p>
                  )}
                </div>
              </div>

              {/* Product Content */}
              <div>
                <label
                  htmlFor="shortDescription"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Product Content
                </label>
                <textarea
                  id="productContent"
                  name="productContent"
                  rows={3}
                  value={formData.productContent}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white sm:text-sm p-2 border"
                />
                {errors.productContent && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.productContent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Add Product'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
