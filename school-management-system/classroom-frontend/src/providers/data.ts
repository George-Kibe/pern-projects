import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";

import { CreateResponse, GetOneResponse, ListResponse } from "@/types";
import { BACKEND_BASE_URL } from "@/constants";
import { stat } from "fs";
import { HttpError } from "@refinedev/core";
console.log("Backend Url: ", BACKEND_BASE_URL);

const buildHttpError = async (response: Response): Promise<HttpError> =>{
  let message = "Request Failed";
  try {
    const payload = (await response.json() ) as {message?: string};
    if (payload.message) message = payload.message;
  } catch (error) {
    // ignore errors
  }
  return {
    message,
    statusCode: response.status,
  }
}

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({resource}) => resource,

     buildQueryParams: async ({ resource, pagination, filters }) => {
      const params: Record<string, string | number> = {};

      if (pagination?.mode !== "off") {
        const page = pagination?.currentPage ?? 1;
        const pageSize = pagination?.pageSize ?? 10;

        params.page = page;
        params.limit = pageSize;
      }

      filters?.forEach((filter) => {
        const field = "field" in filter ? filter.field : "";
        const value = String(filter.value);

        if (field === "role") {
          params.role = value;
        }

        if (resource === "departments") {
          if (field === "name" || field === "code") params.search = value;
        }

        if (resource === "users") {
          if (field === "search" || field === "name" || field === "email") {
            params.search = value;
          }
        }

        if (resource === "subjects") {
          if (field === "department") params.department = value;
          if (field === "name" || field === "code") params.search = value;
        }

        if (resource === "classes") {
          if (field === "name") params.search = value;
          if (field === "subject") params.subject = value;
          if (field === "teacher") params.teacher = value;
        }
      });

      return params;
    },
    
    mapResponse: async(response) => {
      if (!response.ok) throw await buildHttpError(response);
      const payload: ListResponse = await response.json();
      return payload.data ?? [];
    },
    getTotalCount: async (response) => {
      if (!response.ok) throw await buildHttpError(response);
      const payload: ListResponse = await response.json();
      return payload?.pagination?.total || 0 ;
    }
  },
  
};

const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider }; 