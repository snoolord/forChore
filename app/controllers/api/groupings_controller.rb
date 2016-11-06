class Api::GroupingsController < ApplicationController
  def index
    puts grouping_params
    @grouping = Grouping.where(
    user_id: grouping_params[:user_id].to_i,
    group_id: grouping_params[:group_id].to_i
    ).pluck(:id)[0]
  end
  def destroy
    @grouping = Grouping.find(params[:id])
    p @grouping.group
    @grouping.destroy
    render json: ["Deleted"]
  end

  private
  def grouping_params
    params.require(:grouping).permit(:user_id, :group_id)
  end
end
