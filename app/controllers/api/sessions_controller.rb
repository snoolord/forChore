class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    puts @user
    if @user
      login(@user)
      render "api/users/show"
    elsif @user == nil
      render(json: ["Incorrect Username","Incorrect Password"], status: 404)
    elsif @user == false
      render(json: ["Incorrect Password"], status: 404)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: "api/users/show"
    else
      render(json: ['nobody is logged in'], status: 404)
    end

  end
end
