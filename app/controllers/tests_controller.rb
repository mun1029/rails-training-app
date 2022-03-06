class TestsController < ApplicationController

  def index
    
  end

  def user_create
    name = params[:name]
    age = params[:age]
    
    render json:{ date: "OK"}

  end

end


