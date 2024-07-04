import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8081';

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food/create', data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    });

    return mutate
}
