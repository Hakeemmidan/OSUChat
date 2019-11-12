class Api::UsersController < ApplicationController
    def index
        @users = User.all
    end

    def create
        debugger
        @user = User.new(user_params)
        if @user.save
            sign_in(@user)
            render :index
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])

        if @user.destroy
            render :index
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:password, :username)
    end
end