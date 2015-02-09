class BooksController < ApplicationController

  def index
    @books = Book.all
    @book = Book.new
  end

  def show
    @book = Book.find(params[:id])
  end

  def create
    @book = Book.new(book_params)


    if @book.save
      render json: @book
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end

  end

  # def new
  #   @book = current_user.books.build
  # end

  def edit
    @books = Book.all
    @book = Book.find(params[:id])
    render :action => "index"
  end

  def update
    @books = Book.all
    @book = Book.find(params[:id])
    if @book.update_attributes(params[:book])
      flash[:notice] = "Successfully updated book."
      redirect_to posts_url
    else
      render :action => 'index'
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def book_params
    params.require(:book).permit(:title, :thoughts)
  end

end
