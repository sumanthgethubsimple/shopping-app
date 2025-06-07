from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Needed for session and flash messages

# Sample product data (could be from a database)
products = [
    {"id": 1, "name": "Luxury Watch", "desc": "Premium timepieces with elegant design", "price": 299.00, "img": "https://i.imgur.com/LXxQxGv.png"},
    {"id": 2, "name": "Wireless Earbuds", "desc": "High-quality wireless audio", "price": 149.00, "img": "https://i.imgur.com/VJP1JVP.png"},
    {"id": 3, "name": "Leather Handbag", "desc": "Stylish and spacious design", "price": 199.00, "img": "https://i.imgur.com/vJz8hrm.png"},
    {"id": 4, "name": "Sport Sneakers", "desc": "Comfortable and trendy", "price": 89.50, "img": "https://i.imgur.com/fAgZL8T.png"},
]

@app.route('/')
def home():
    return render_template('index.html', products=products)

@app.route('/categories')
def categories():
    # Just render the homepage but highlight categories or you can make a new page
    return render_template('categories.html')

@app.route('/deals')
def deals():
    # You can create a deals page or just show all products with discounts
    return render_template('deals.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/search')
def search():
    query = request.args.get('query', '')
    if query:
        filtered_products = [p for p in products if query.lower() in p['name'].lower()]
        return render_template('search_results.html', query=query, products=filtered_products)
    else:
        flash('Please enter a search term.')
        return redirect(url_for('home'))

@app.route('/add_to_cart/<int:product_id>', methods=['POST'])
def add_to_cart(product_id):
    # Simple cart stored in session
    cart = session.get('cart', [])
    cart.append(product_id)
    session['cart'] = cart
    flash('Product added to cart!')
    return redirect(url_for('home'))

@app.route('/cart')
def cart():
    cart = session.get('cart', [])
    cart_products = [p for p in products if p['id'] in cart]
    return render_template('cart.html', products=cart_products)

if __name__ == '__main__':
    app.run(debug=True)
