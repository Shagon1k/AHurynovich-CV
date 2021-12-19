/** Helps to provide application components to use general services by injection with specific HOC or hook */
export const ServicesContext = React.createContext();

export const ServicesProvider = ServicesContext.Provider;
export const ServicesConsumer = ServicesContext.Consumer;
